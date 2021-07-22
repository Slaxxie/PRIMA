namespace WhiteWater {
    import ƒ = FudgeCore;

    export function randomIntInGamespace(): number {
        return Math.round((Math.random() * (rightBorder * 2)) - rightBorder);
    }

    export function spawnAmount(): number {
        return Math.round(((Math.random() * Math.ceil(level / 5) - 1) + 1));
    }

    export function levelUp(): void {
        if (levelProgress >= (levelProgressBase + (level * levelProgressModifier))) {
            levelProgress = levelProgress - (levelProgressBase + (level * levelProgressModifier));
            level++;
            velocity = level + velocityMod;
            state = level % 6;
            console.log(level);
            backGroundVelocity = (level / 5) + backGroundVelocityMod;
            console.log("Level: " + level);
            console.log("Velocity: " + velocity);
            sfxPlayer.playSFX(SFXs.levelUpSound);
            upgrade();
            modifySpawn();
            console.log(state);
        }
    }

    export function upgrade(): void {

        switch (state) {
            case 1: {
                heal();
                break;
            }
            case 2: {
                increaseMovementSpeed();
                break;
            }
            case 3: {
                coolDownReduced();
                break;
            }
            case 4: {
                heal();
                break;
            }
            case 5: {
                increaseLife();
                break;
            }
            case 0: {
                getTimeWarp();
                break;
            }
            default: {
                break;
            }
        }
    }

    function increaseMovementSpeed(): void {
        movementSpeed ++;
    }
    function heal(): void {
        currentLives = maxLives;
    }
    function increaseLife(): void {
        maxLives++;
    }
    function coolDownReduced(): void {
        deflectorShieldCooldownMax = deflectorShieldCooldownMax - 120;
    }
    function getTimeWarp(): void {
        if (timeWarpCharges < 3) {
            timeWarpCharges++;
        }
    }
    export function checkCollision(): void {
        if (invulnerableActive == false) {
            for (let rock of rocks.getChildren() as Rock[]) {
                if (rock.checkCollision(player)) {
                    sfxPlayer.playSFX(SFXs.hitSound);
                    rocks.removeChild(rock);
                    currentLives = currentLives - rock.damageOfContact;
                    gameOver();
                    console.log("CR:" + currentLives);
                }
            }
        }
        for (let loot of lootables.getChildren() as Loot[]) {
            if (loot.checkCollision(player)) {
                lootables.removeChild(loot);
                sfxPlayer.playSFX(SFXs.lootingSound);
                playerPoints = playerPoints + loot.worthOfLoot;
                levelProgress = levelProgress + loot.worthOfLoot;
                levelUp();
                console.log("Player Points: " + playerPoints);
                console.log("Level progress: " + levelProgress);
            }
        }
    }

    export function gameOver(): void {
        if (currentLives <= 0) {
            sfxPlayer.playSFX(SFXs.gameOverSound);
            sfxPlayer.soundTrack(false);
            ƒ.Loop.stop();
            gameOverMenu();
        }
    }

    export function mainMenu(): void {
        gamestate = GAMESTATE.MAINMENU;
        sfxPlayer.menuSound(true);
        console.log(gamestate);
        ƒ.Loop.stop();
        document.getElementById("mainMenu").style.display = "inline";

    }

    export function pauseGame(): void {
        gamestate = GAMESTATE.PAUSE;
        sfxPlayer.cmpAudioSoundtrack.volume = 0.05;
        console.log(gamestate);
        ƒ.Loop.stop();
        document.getElementById("pauseMenu").style.display = "inline";

    }

    export function optionMenu(): void {
        gamestate = GAMESTATE.OPTIONS;
        console.log(gamestate);
        document.getElementById("optionMenu").style.display = "inline";

    }

    export function resumeGame(): void {
        gamestate = GAMESTATE.PLAYING;
        sfxPlayer.cmpAudioSoundtrack.volume = 0.3;
        sfxPlayer.soundTrack(true);
        console.log(gamestate);
        ƒ.Loop.continue();
    }


    export function highScore(): void {
        gamestate = GAMESTATE.HIGHSCORE;
        console.log(gamestate);
        topTen();
        /* let i: number = 0;
        let userName: string[] = [];
        let userScore: number[] = [];
        while (true) {
            let score: string = localStorage.getItem(i.toString());
            if (score) {
                // tslint:disable-next-line: no-any
                let scoreObj: any = JSON.parse(score);

                userName.push(scoreObj.name);
                userScore.push(parseInt(scoreObj.points));
            } else {
                mainMenu();
                break;
            }
            i++;
        } */
    }


    export function gameOverMenu(): void {
        gamestate = GAMESTATE.GAMEOVER;
        console.log(gamestate);
        let name: string = prompt("INSERT NAME", "Player");
        // tslint:disable-next-line: no-any
        const regex: any = /^[a-zA-Z0-9]*$/;
        const isExisting: boolean = regex.test(name);
        console.log(name.length);
        if (!isExisting || name.length <= 3 || name.length >= 10) {
            gameOverMenu();
            return;
        }
        console.log(isExisting);
        if (name == null) {
            name = "Player";
        }
        let i: number = 0;
        while (true) {
            let score: string = localStorage.getItem(i.toString());
            if (!score) {
                // tslint:disable-next-line: quotemark
                localStorage.setItem(i.toString(), '{"name": "' + name + '","points": ' + playerPoints + '}');
                break;
            }
            i++;
        }
        location.reload();
    }
    function topTen(): void {
        let i: number = 0;
        let highScoreArray: { name: string, points: number }[] = [];

        while (true) {
            let score: string = localStorage.getItem(i.toString());
            if (score) {
                let scoreObj: { name: string, points: number } = JSON.parse(score);
                highScoreArray.push(scoreObj);
            } else {
                break;
            }
            i++;
        }

        // tslint:disable-next-line: no-any
        function compare(a: any, b: any): number {
            // tslint:disable-next-line: typedef
            const hScoreA = a.points;
            // tslint:disable-next-line: typedef
            const hScoreB = b.points;

            let comparison: number = 0;
            if (hScoreA > hScoreB) {
                comparison = -1;
            } else if (hScoreA < hScoreB) {
                comparison = 1;
            }
            return comparison;
        }
        highScoreArray = highScoreArray.sort(compare);
        highScoreArray = highScoreArray.slice(0, 10);
        console.log(highScoreArray);

        /* console.log(highScoreArray); */
        //
    }

    export function modifySpawn(): void {
        switch (level) {
            case 1: {
                spawnCounterMax = 55;
                break;
            }
            case 5: {
                spawnCounterMax = 50;
                break;
            }
            case 10: {
                spawnCounterMax = 40;
                break;
            }
            case 15: {
                spawnCounterMax = 30;
                break;
            }
            case 20: {
                spawnCounterMax = 18;
                break;
            }
            case 25: {
                spawnCounterMax = 11;
                break;
            }
            case 30: {
                spawnCounterMax = 7;
                break;
            }
            default: {
                break;
            }
        }
    }

    export async function loadGameValues(): Promise<void> {
        gameValueObject = await (await fetch("GameOptions.json")).json();
        gameValueObject = gameValueObject.gameValueObject;
        console.log(gameValueObject);
        deflectorShieldCooldownMax = gameValueObject.deflectorShieldCooldownMax;
        invulnerableEnd = gameValueObject.invulnerableEnd;
        timeWarpEnd = gameValueObject.timeWarpEnd;
        movementSpeed = gameValueObject.movementSpeed;
        bigLootPropability = gameValueObject.bigLootPropability;
        reward = gameValueObject.reward;
        rewardFactor = gameValueObject.rewardFactor;
        maxLives = gameValueObject.maxLives;
        levelProgressBase = gameValueObject.levelProgressBase;
        levelProgressModifier = gameValueObject.levelProgressModifier;
        asteroidDamage = gameValueObject.asteroidDamage;
    }
}
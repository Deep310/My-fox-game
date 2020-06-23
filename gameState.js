const gameState = {
  stat: "INIT",
  clock: 1,
  wakeTime: -1,
  tick() {
    this.clock++;
    console.log("clock", this.clock);

    if (this.clock === this.wakeTime) {
      this.wake();
    }
    return this.clock;
  },
  handleUserAction(icon) {
    if (["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.stat)) {
      return;
    }

    if (this.stat === "INIT" || this.stat === "DEAD") {
      this.startGame();
      return;
    }

    switch (icon) {
      case "weather":
        this.changeWeather();
        break;
      case "poop":
        this.cleanUpPoop();
        break;
      case "fish":
        this.feed();
        break;
    }
  },
  changeWeather() {
    console.log("changeweather");
  },
  cleanUpPoop() {
    console.log("clean poop");
  },
  feed() {
    console.log("feed fox");
  },
  startGame() {
    console.log("hatching");
    this.stat = "HATCHING";
    this.wakeTime = this.clock + 3;
  },
  wake() {
    console.log("awoken");
    this.stat = "IDLING";
    this.wakeTime = -1;
  },
};

export const handleUserAction = gameState.handleUserAction.bind(gameState);
export default gameState;

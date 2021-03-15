const game = {
  current: "INIT",
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
  startGame() {
    console.log("hatching");
    this.current = "HATCHING";
    this.wakeTime = this.clock + 2;
  },
  wake() {
    console.log("awoken");
    this.current = "IDLING";
    this.wakeTime = -1;
  },
  handleUserAction(icon) {
    if (
      ["SLEEP", "FEEDING", "CELEBRATING", "HATCHING"].includes(this.current)
    ) {
      // Do nothing in these particular states.
      return;
    }

    if (this.current === "INIT" || this.current === "DEAD") {
      this.startGame();
      return;
    }
    // If the ${icon} icon is clicked, run the associated function.
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
    console.log("changeWeather");
  },
  cleanUpPoop() {
    console.log("cleanUpPoop");
  },
  feed() {
    console.log("feed");
  },
};

// bind -> binding the context of handleUserAction to gameState, it always has to be gameState
export const handleUserAction = game.handleUserAction.bind(game);
export default game;

const game = {
  current: "INIT",
  clock: 1,
  tick() {
    this.clock++;
    console.log("clock", this.clock);
    return this.clock;
  },

  handleUserAction() {
    console.log(icon);
  },
};

export default game;

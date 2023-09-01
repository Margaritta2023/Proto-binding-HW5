let airplane = {
   
    setName(str) {
        this.name = str;
        return this;
    },

    takeOff() {
        if(!this.isFlying) this.isFlying = true;
        return this;
    },

    land() {
        if (this.isFlying) this.isFlying = false;
        return this;
    }
}

airplane.setName("Muhaha");
airplane. takeOff();
airplane.land();

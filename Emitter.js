class Emitter extends p5.Vector {
    constructor(x,y) {
        super(x,y);
        this.particles = [];
    }

    emit(num) {
        for (let i=0; i < num; i++) {
            this.particles.push(new Particle(this.x,this.y));   
        }
    }

    applyForce(force) {
        for (let particle of this.particles) {
            particle.applyForce(force);
        }
    }

    update() {
        for (let particle of this.particles) {
            particle.update();
        }
        
        for (let j = this.particles.length-1; j >= 0; j--) {
            if (this.particles[j].finished()) {
              this.particles.splice(j, 1);
            }
        }   
    }

    show() {
        for (let particle of this.particles) {
            particle.show();
        }
    }
}
const PI2 = math.PI * 2;

export class GlowParticle {
    constructor(x, y, raduis, rgb) {
        this.x = x;
        this.y = y;
        this.raduis = raduis;
        this.rgb = rgb;

        this.vx = Math.random() * 4;
        this.vy = Math.random() * 4;

        this.sinValue = Math.random();
    }

    animate(ctx, stageWidth, stageHeight) {
        this.sinValue += 0.01;

        this.raduis += Math.sin(this.sinValue);

        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0) {
            this.vx *= -1;
            this.x += 10;
         } else if (this.x > stageWidth) {
            this.vx *= -1;
            this.x -= 10;
         }
         if (this.y < 0) {
            this.vy *= -1;
            this.y += 10;
         } else if (this.y > stageHeight) {
            this.vy *= -1;
            this.y -= 10;
         }

         ctx.beginPath();
         ctx.fillStyle = 'rgba(${this.rgb.r}, ${this.rgb.g}, ${this.rgb.b}, 1)';
         ctx.fill();
    }
}
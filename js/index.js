const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

class Sprite {
    constructor({position, velocity}) {
        this.position = position
        this.velocity = velocity
    }

    draw() {
        ctx.fillStyle = '#222'
        ctx.fillRect(this.position.x, this.position.y, 3, 3)
    }

    update() {
        this.draw()
    }
}

const creature = new Sprite({
    position: {
        x: canvas.width / 2,
        y: canvas.height / 2
    },
    velocity: 5
})

function animate() {
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    creature.update()
}

animate()

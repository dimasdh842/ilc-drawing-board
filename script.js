 window.addEventListener('load',() => {
    const canvas = document.getElementById('myCanvas')
    const ctx = canvas.getContext('2d')

    // elements button
    const btnSave = document.querySelector('.btn-save')
    const btnClear = document.querySelector('.btn-clear')


    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    // variables
    let painting = false

    function startPosition(e) {
        painting = true
        draw(e)
    }
    
    function finishedPosition() {
        painting = false
        ctx.beginPath()
    }

    function clear() {
        ctx.clearRect(0,0,canvas.width,canvas.height)
    }

    function draw(e) {
        
        if (!painting) {
            return
        }

        ctx.lineWidth = 10
        ctx.lineCap = 'round'

        ctx.lineTo(e.clientX,e.clientY)
        ctx.stroke()
        ctx.beginPath()
        ctx.moveTo(e.clientX,e.clientY)
        ctx.clear

    }

    // Event Listener

    canvas.addEventListener('mousedown',startPosition)
    canvas.addEventListener('mouseup', () => {
        finishedPosition()
        // alert(painting)
    })
    canvas.addEventListener('mousemove', draw)

    btnClear.addEventListener('click', clear)
    btnSave.addEventListener('click', screenshot)

    // screenshot
    
    function screenshot() {
        html2canvas(document.querySelector("#myCanvas")).then(canvas => {
        document.body.appendChild(canvas)
    });
        
    }
})


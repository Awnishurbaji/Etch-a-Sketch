function addGrid()
{
const container=document.querySelector('.container')
for(i=0;i<16;i++)
{
    for(j=0;j<16;j++)
    {
        const div =document.createElement('div')
        div.classList.add('grid-item')
        container.appendChild(div)
    }
}
}
function random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}
function rainbowMode()
{
    const grid= document.querySelectorAll(".grid-item")
    grid.forEach(sqr=>{
        sqr.addEventListener('mouseover',e=>
        {
            color=random_rgba()
            str='background-color:'+color
            sqr.setAttribute('style',str)
        })
    })
}

function changeGridColor()
{
    const grid= document.querySelectorAll(".grid-item")
    grid.forEach(sqr=>{
        sqr.addEventListener('mouseover',e=>
        {
            sqr.removeAttribute('style')
            sqr.classList.add('hov')
        })
    })
    
}
function colorPickerGrid(color)
{
    const grid= document.querySelectorAll(".grid-item")
    grid.forEach(sqr=>{
        sqr.addEventListener('mouseover',e=>
        {
            str='background-color:'+color
            sqr.setAttribute('style',str)
        })
    })
}
function changeGridSize(n)
{
    
    const container=document.querySelector('#main')
container.classList.remove('container','containerdup')
    str='repeat'+'('+n+',1fr'+')'
    columns='grid-template-columns:' +str+';'
    raws="grid-template-raws:"+str
    container.classList.add('containerdup')
    container.setAttribute('style',columns+raws)
    for(i=0;i<n;i++)
    {
        for(j=0;j<n;j++)
        {
            const div =document.createElement('div')
            div.classList.add('grid-item')
            container.appendChild(div)
        }
    }
}
function erase_Pad(){
    colorPickerGrid('wheat')
}
function clear_Pad()
{
    const grid= document.querySelectorAll(".grid-item")
    grid.forEach(sqr=>{
            str='background-color:wheat'
            sqr.setAttribute('style',str)
    })
    changeGridColor()
}
// Slider
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value; // Display the default slider value
    
    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
      output.innerHTML = this.value;
      changeGridSize(slider.value)
      changeGridColor()
      
    }
// Color Picker
var picker = document.getElementById("colorpicker");
// Update the current slider value (each time you drag the slider handle)
picker.oninput = function() {
  colorPickerGrid(picker.value)
}
changeGridSize(20)
changeGridColor()
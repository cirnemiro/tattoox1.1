export const popUp = (text)=>{
console.log(text);
 const element = document.createElement('div')
 element.classList.add('popUp')
 element.innerHTML = text
 const body = document.getElementsByTagName('body')[0]
 body.appendChild(element)
 setTimeout(() => {
     element.remove()
 }, 5000);
}
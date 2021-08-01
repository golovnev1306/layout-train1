import './styles.scss'
import 'tiny-slider/dist/tiny-slider.css'
import mixitup from 'mixitup'
import { tns } from 'tiny-slider/src/tiny-slider'

window.onload = () => {
  document.querySelector('body').style.visibility = 'visible'
}

let mixer = mixitup('.gallery__images-list', {
  load: {
    filter: '.gallery-web'
  }
})

let slider = tns({
  container: '.team__list',
  items: 3,
  slideBy: 'page',
  gutter: 30,
  controls: false,
  autoplayButtonOutput: false,
  nav: true,
  rewind: false,
  navPosition: 'bottom',
  loop: false,
  mouseDrag: true
})


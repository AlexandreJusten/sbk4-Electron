import { Containner } from "./styled.js"
import Image from "/home/ajusten/Documentos/Development/sbk4/clienteElectron/electron-vite-react/src/assets/logo.png"
function Imovel(){

    return(
        <Containner>
         <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src={Image} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
        </Containner>
    )
}

export default Imovel
/**
 * 
 * código desenvolvido para abrir a pagina com as informações da medida do produto
 * 
 */

// #INICIO - HTML PERSONALIZADO
/*
{ <div class="shopify-section">
  <div class="product-recommendations">
    <div class="page-width">
      <div class="section-block__header text-center">
        <a type="button" id="tabelaMedidas" href="#" class="btn btn-info">TABELA DE MEDIDAS</a>
        <span id="tagsProduto" style="display: none;">{{ product.tags | join: ", " }}</span>
      </div>
    </div>
  </div>
</div> }
<script>
*/

  document.getElementById("tabelaMedidas").addEventListener("click", function() {
  tags = document.getElementById("tagsProduto").innerText
  tags = tags.split(',')
  for (let index = 0; index < tags.length; index++) {
    let element = tags[index];
    element = element.toLowerCase()
    element = element.replace(" ","")
    let url=true
    if (element == 'calças') {
      window.location='../pages/medidas-calca';
      url=false
    }
    if (element == 'camiseta') {
      window.location='../pages/medidas-camiseta';
      url=false
    }
    if (element == 'bonés') {
      window.location='../pages/medidas-boné';
      url=false
    }
    if (url){
      window.location='../pages/medidas';
    }
  }
});
  
/*
</script>
<!-- #FIM - HTML PERSONALIZADO-->
*/
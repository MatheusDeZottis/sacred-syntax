<template>
    
    <footer>
        <div class="Rodape"> 
         <p id="text_rodape">&copy; todos os direitos, reservados Desenvolvido por 
        <nav id="link_footer">
             <a href="https://github.com/MatheusDeZottis" target="_blank">Matheus De Zottis</a>
        </nav>
        </p>   
        </div>
    </footer>
    

</template>


<style scoped>

 .Rodape {
   
    position: absolute;
    width: 100%;
    height: 80px;
    margin-top: 100%;      text-align: center;
    background-color: #3dff00;
    display: block;
    z-index: 1000; /* faz que o rodapé fique em cima dee outros elementos caso seja necessario */
    

} 



a {
    text-decoration: none;
    
}

#text_rodape {
    color: black;
    font-style: italic;
    font-size: large;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-decoration: dashed;
    
}


#link_footer {

    position: relative;
    display: inline-block;
    color: #000000;
    text-decoration: none;
    font-size: 18px;
    font-weight: bold;
    transition: color 0.7s ease; 
    
}

#link_footer::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #ff0800;
    transition: width 0.3s ease; 
    
}

#link_footer:hover {
    color: #0bff71; 
}

#link_footer:hover::after {
    width: 100%; 
}



</style>

<script>



</script>
AFRAME.registerComponent('button-handler', {
  init: function() {
    var el = this.el;
    var blocks = document.querySelectorAll('.selector');
    var previousBlock;

    el.addEventListener('click', function(event) {
      if (event.target.matches('a-image')) {
        var id = event.target.parentElement.getAttribute('id');
        var block = document.getElementById(id);
        
        if (previousBlock) {
          previousBlock.setAttribute('visible', false);
        }
        
        block.setAttribute('visible', true);
        previousBlock = block;
      }
    });

    blocks.forEach(block => {
      block.addEventListener('click', function(event) {
        if (event.target.matches('a-image')) {
          var id = event.target.parentElement.getAttribute('id');
          var block = document.getElementById(id);
          
          if (previousBlock) {
            previousBlock.setAttribute('visible', false);
          }
          
          block.setAttribute('visible', true);
          previousBlock = block;
        }
      });
    });
  }
});

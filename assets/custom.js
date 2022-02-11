/**
 * Include your custom JavaScript here.
 *
 * We also offer some hooks so you can plug your own logic. For instance, if you want to be notified when the variant
 * changes on product page, you can attach a listener to the document:
 *
 * document.addEventListener('variant:changed', function(event) {
 *   var variant = event.detail.variant; // Gives you access to the whole variant details
 * });
 *
 * You can also add a listener whenever a product is added to the cart:
 *
 * document.addEventListener('product:added', function(event) {
 *   var variant = event.detail.variant; // Get the variant that was added
 *   var quantity = event.detail.quantity; // Get the quantity that was added
 * });
 */

Currency.format = 'money_format';

(function($, window, document, undefined) {
  var $win = $(window);
  var $doc = $(document);

  if ($('.CurrencySelector__Select').val() !== 'USD') {
    Currency.convertAll(
      'USD',
      $('.CurrencySelector__Select').val(),
      '[data-money-convertible]'
    );
  }

  $doc.ready(function() {
    // Show the first tab and hide the rest
    $('.js-tabs-nav li:first-child').addClass('active');
    $('.js-tab').hide();
    $('.js-tab:first').show();

    // Click function
    $('.js-tabs-nav li').click(function() {
      $('.js-tabs-nav li').removeClass('active');
      $(this).addClass('active');
      $('.js-tab').hide();

      var activeTab = $(this)
        .find('a')
        .attr('href');
      $(activeTab).fadeIn();
      return false;
    });

    function removeDuplicatedSezzleWidget(){
      if(window.innerWidth < 1007){
        if ($('.rc_radio__autodeliver').is(':checked')) {
          $('.template-product .product-single__meta>.sezzle-product-page-widget').hide();
        }else{
          $('.template-product .product-single__meta>.sezzle-product-page-widget').show();
        }
      }else{
        console.log('test')
        $('#shopify-section-product-template .product-single__info .product-single__meta .sezzle-product-page-widget').remove();
      }
    }

    $('input[name="purchase_type"]').on('change', function() {
      console.log(1);
      $('.product-single .visible-pocket .product-single__price').html(
        $('.Product__Info .product-single__price').html()
      );
      removeDuplicatedSezzleWidget();
    });
    $('#shopify-section-product-template #rc_container div').on('click', function() {
      removeDuplicatedSezzleWidget();
    });
    
  });

  // Accessibility trigger
  $win.on('load', function () {
    setTimeout(function () {
      $('.Linklist__Item a').each(function () {
        var $this = $(this);
        if ($this.attr('href').indexOf('accessibility') >= 0) {
          $this.addClass('link-accessibility');
        }
      });
      $('.link-accessibility').on('click', function (event) {
        event.preventDefault();
        $('.acsb-trigger').trigger('click');
      });
    }, 1000);
  });
  
  
  var messages = [],
        index = 0;

  	messages.push('face acne sucks.');
    messages.push('butt acne sucks.');
    messages.push('dingleberries suck.');
    messages.push('oily skin sucks.');
  	messages.push('redness sucks.');
  	messages.push('body odor sucks.');
  	

    function cycle() {
        $('#word-switch').html(messages[index]);
        index++;

        if (index === messages.length) {
            index = 0;
        }

        setTimeout(cycle, 1000);
    }

    cycle();
  
  
})(jQuery, window, document);

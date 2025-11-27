$(document).ready(function () {
  $('#search').on('keyup', function () {
    const query = $(this).val().trim();

    $('#loading').show();

    $.ajax({
      url: '/products',
      type: 'GET',
      data: { q: query },
      success: function (data) {
        $('#loading').hide();
        $('#results').empty();

        if (!data || data.length === 0) {
          $('#results').html('<p>No products found</p>');
          return;
        }

        data.forEach(item => {
          $('#results').append(`
            <div class="product">
              <img src="${item.image}" alt="">
              <div>
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
              </div>
            </div>
          `);
        });
      }
    });
  });
});

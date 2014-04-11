function getUrlParams() {

	var params = location.search.slice(1).split('&');    
    var result = {};

	params.forEach(function(param) {
    	if (param.length > 0) {
        	param = param.split('=');
		    result[param[0]] = decodeURIComponent(param[1] || '');
	    }
    });

	return JSON.parse(JSON.stringify(result));
}

$('a[data-sort=sort]').on('click', function(event) {
	event.preventDefault();
	var params = getUrlParams();
	params['order'] = $(this).data('sort-order');
	params['direction'] = $(this).data('sort-direction');
	location.href = '?' + $.param(params);
}); 

$('.dropdown-menu input').on('click', function(event) {
	event.stopPropagation();
});

$('#sx').popover({ html: true, content: $('#search-form').html() });

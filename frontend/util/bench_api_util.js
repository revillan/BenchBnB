
export const fetchBenches = function(filters, success){
  $.ajax({
    method: 'GET',
    url: 'api/benches',
    data: {bounds: filters},
    success,
    error: () => console.log('error')
  });
};

window.fetchBenches = fetchBenches;

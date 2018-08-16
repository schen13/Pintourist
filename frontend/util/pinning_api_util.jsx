export const createPinning = pinning => (
  $.ajax({
    method: 'POST',
    url: `api/pinnings`,
    data: { pinning }
  })
);

export const deletePinning = pinningId => (
  $.ajax({
    method: 'DELETE',
    url: `api/pinnings/${pinningId}`
  })
);
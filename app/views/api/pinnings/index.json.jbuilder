@pinnings.each do |pinning|
  json.set! pinning.id do
    json.extract! pinning, :id, :board_id, :pin_id
  end
end

values = []

@conditions.each do |condition|
    values.push(condition.name)
end

json.array! values
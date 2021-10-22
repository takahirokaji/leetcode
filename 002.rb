def add_two_numbers(l1, l2)
  added = l1.reverse.join.to_i + l2.reverse.join.to_i
  added.to_s.chars.map(&:to_i)
end

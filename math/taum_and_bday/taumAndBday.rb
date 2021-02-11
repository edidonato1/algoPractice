def taumBday(b, w, bc, wc, z)
  [bc, wc + z].min * b + [wc, bc + z].min * w # minimum cost for black gifts, + minimum cost for white gifts
end
# solved this one in Ruby, as some of the test cases returned large integers that JS can't handle
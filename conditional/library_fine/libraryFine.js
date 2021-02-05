function libraryFine(d1, m1, y1, d2, m2, y2) {
  return  y1 > y2 ? 10000
        : y1 < y2 ?  0
        : m1 > m2 ? (m1 - m2) * 500
        : m1 < m2 ? 0
        : d1 > d2 ? (d1 - d2) * 15
        :  0
}
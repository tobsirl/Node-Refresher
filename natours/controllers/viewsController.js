exports.getOverview = (req, res) => {
  res.status(200).render('_overview', {
    title: 'All Tours'
  });
};

exports.getTour = (req, res) => {
  res.status(200).render('_tour', {
    title: 'The Forest Hiker'
  });
};

### simple-react app

A simple react app to explore topics like accessibility and performance.

## accessibility

This set of changes will focus on making the simple-react app more accessible.

# lighthouse

Lighthouse in the Chrome dev tools provides a report on accessibility.  The base app had an initial score of 65 with some basic items to address:

* Page does not contain a heading, skip link, or landmark region
* Colors do not have a sufficient contrast
* Missing lang attribute on html tag
* Forms do not have labels on inputs

After addressing these issues, the report reveleaed one of the items I expected to show up.  Images with no alt text.

Report at 100% now.


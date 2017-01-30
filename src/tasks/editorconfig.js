const { ini } = require('mrm-core');

const generalRules = {
  charset: 'utf-8',
  indent_style: 'space',
  indent_size: 2,
  end_of_line: 'lf',
  insert_final_newline: true,
  trim_trailing_whitespace: true,
};
const mdRules = {
  insert_final_newline: false,
  trim_trailing_whitespace: false,
};

module.exports = () => {
  ini('.editorconfig', 'editorconfig.org')
    .set('root', true)
    .set('*', generalRules)
    .set('.md', mdRules)
    .save()
  ;
};

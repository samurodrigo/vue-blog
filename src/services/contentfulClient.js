const contentful = require('contentful');
export default {
  getClient() {
    return contentful.createClient({
      space: 'qpd6hzmvr7p5',
      accessToken: 'A4kA8K8df1udkkCc_kD8FWb1SkVtc_aj95yTUMEBA0Y',
    });
  },
  getBlogPosts() {
    return this.getClient()
      .getEntries({
        content_type: 'blogPost',
      })
      .then(function(entries) {
        return entries;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getPostBySlug(slug) {
    return this.getClient()
      .getEntries({
        'fields.slug': slug,
        content_type: 'blogPost',
      })
      .then((entries) => {
        return entries;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

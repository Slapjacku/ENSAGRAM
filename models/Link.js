app.post('/save-links', (req, res) => {
    // Save the links to your database here
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/save-links', {
        twitter: twitterLink,
        linkedin: linkedinLink,
        instagram: instagramLink,
        facebook: facebookLink,
      });
      console.log(res.data);
      setSaveLinksModalOpen(true);
    } catch (err) {
      console.log(err);
    }
  };
  
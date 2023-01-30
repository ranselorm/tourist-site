const SiteDetail = ({ site }) => {
  return (
    <div className="site-detail">
      <div className="site-image">
        <img src={site.image} alt="" />
      </div>
      <div className="site-content">
        <h2>{site.title}</h2>
        <h4>{site.location}</h4>
        <p>{site.description}</p>
      </div>
    </div>
  );
};

export default SiteDetail;

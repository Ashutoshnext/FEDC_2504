const formatUserInfo = (user) => {
    const {
      id = "Information not available",
      profile: { name = "Information not available" }={},
      address: { city = "Information not available", zipcode = "Information not available" }={}
    } = user || {};
  
    return `User ${name} (ID: ${id}) lives in ${city} (ZIP: ${zipcode})`;
  };
  
  const user2 = {
    id: 123,
    profile: { name: "John Doe" }
  };
  
  console.log(formatUserInfo(user2));
  

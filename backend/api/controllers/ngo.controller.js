import NGO from '../models/ngo.model.js';

export const addNGO = async (req, res) => {
  const {
    email,
    password,
    name,
    registrationNumber,
    contactPerson,
    location,
    establishedDate,
    region,
    mission,
    areasOfWork,
    website,
  } = req.body;

  try {
    const newNGO = new NGO({
      email,
      password,
      name,
      registrationNumber,
      contactPerson,
      location,
      establishedDate,
      region,
      mission,
      areasOfWork,
      website,
    });

    await newNGO.save();
    res.status(201).json({ message: 'NGO added successfully', ngo: newNGO });
  } catch (error) {
    res.status(400).json({ message: 'Error adding NGO', error });
  }
};

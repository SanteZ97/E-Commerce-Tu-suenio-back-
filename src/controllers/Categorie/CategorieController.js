const { Categorie } = require("../../db");

const getAllCategorie = async () => {
  const categorie = await Categorie.findAll();
  return categorie;
};

const getCategorieByName = async (name) => {
  if (name !== "") {
    const searchName = await Categorie.findAll({
      where: { name: name },
    });
    return searchName;
  } else {
    return "Name no puede ser vacio";
  }
};

const createCategorie = async (name) => {
  const create = await Categorie.create({ name });
  return create;
};

const deleteCategorie = async (id) => {
  const categorie = await Categorie.findByPk(id);
  if (!categorie) throw new Error("categorie not found");
  await categorie.destroy();
};

const putCategorie = async (categorieId, updatedCategorieData) => {
  try {
    const categorie = await Categorie.findByPk(categorieId);

    if (!categorie) {
      throw new Error('Categoria no encontrado');
    }

    await categorie.update(updatedCategorieData);

    return categorie;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllCategorie,
  getCategorieByName,
  createCategorie,
  deleteCategorie,
  putCategorie,
};

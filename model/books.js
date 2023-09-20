module.exports = (sequelize,DataTypes)=>{
    const books = sequelize.define('books',{
       BookName:{
            type : DataTypes.STRING,
        },
        AuthorName:{
            type : DataTypes.STRING,
        },
        Price:{
            type : DataTypes.INTEGER,
        },
        IsActive:{
            type : DataTypes.INTEGER,
        },

    },{
        modelName: 'book',
        paranoid: true,
    });
    return books;
}
const User = require('./user.model');
const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'});

class Address extends Model {}

Address.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    street: {
        type: DataTypes.STRING(255),
        allowNull: false,
        validate: {
            len: [1, 255] // street must be between 1 and 255 characters
        }
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [1, 50] // city must be between 1 and 50 characters
        }
    },
    state: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            len: [1, 50] // state must be between 1 and 50 characters
        }
    },
    zip_code: {
        type: DataTypes.STRING(10),
        allowNull: true,
        validate: {
            isNumeric: true, // zip code must only contain numbers
            len: [1, 10] // zip code must be between 1 and 10 characters
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate : DataTypes.NOW
    }
}, {
    sequelize,
    modelName: 'Address',
    tableName: 'addresses',
    timestamps: false
});

Address.belongsTo(User, {foreignKey: 'user_id'});

module.exports = Address;

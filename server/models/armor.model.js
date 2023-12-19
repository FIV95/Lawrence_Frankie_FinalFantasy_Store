const { Model, DataTypes } = require('sequelize');
const ArmorDiscount = require('./armor_discount.model');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class Armor extends Model {}

Armor.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    sales: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    armor_type: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    defense: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    evasion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    weight: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    bonuses: {
        type: DataTypes.STRING(100),
        allowNull: true
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
    modelName: 'Armor',
    tableName: 'armors',
    timestamps: false
});

Armor.hasMany(ArmorDiscount, {foreignKey: 'armor_id'});

module.exports = Armor;

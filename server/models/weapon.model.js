const WeaponDiscount = require('./weapon_discount.model');
const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class Weapon extends Model {}

Weapon.init({
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
    weapon_type: {
        type: DataTypes.STRING(50),
        allowNull: true
    },
    attack: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    crit: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
    },
    accuracy: {
        type: DataTypes.DECIMAL(10, 2),
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
    modelName: 'Weapon',
    tableName: 'weapons',
    timestamps: false
});

Weapon.hasMany(WeaponDiscount, {foreignKey: 'weapon_id'});

module.exports = Weapon;

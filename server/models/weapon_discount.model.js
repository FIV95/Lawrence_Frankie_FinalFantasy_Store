const Weapon = require('./weapon.model');
const Discount = require('./discount.model');
const { Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

class WeaponDiscount extends Model {}

WeaponDiscount.init({
    weapon_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    discount_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    end_date: {
        type: DataTypes.DATEONLY,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'WeaponDiscount',
    tableName: 'weapon_discounts',
    timestamps: false
});

WeaponDiscount.belongsTo(Weapon, {foreignKey: 'weapon_id'});
WeaponDiscount.belongsTo(Discount, {foreignKey: 'discount_id'});
module.exports = WeaponDiscount;

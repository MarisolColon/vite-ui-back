module.exports = function(sequelize, DataTypes) {
    const ContactInfo = sequelize.define('ContactInfo', {
        contact_id: {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(1000),
            allowNull: true
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: true 
        },
        state: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        zip: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }, {
        tableName: 'contacts_info',
        timestamps: false,
        underscored: true
    })
    ContactInfo.associate = function(models) {
        // associations can be defined here
        ContactInfo.belongsTo(models.Departments)
    }
    return ContactInfo
}
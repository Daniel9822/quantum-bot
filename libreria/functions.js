exports.getGroupAdmins = (participantes) => {
    var admins = []
    for (let i of participantes) {
        i.admin === "admin" ? admins.push(i.id) : ''
    }
    return admins
}

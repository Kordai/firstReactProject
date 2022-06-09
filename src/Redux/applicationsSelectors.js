import { createSelector } from "reselect"
import { getAuthUserId, getAuthUserTeam } from "./authSelectors"

export const getApplications = state => state.applications

export const getDelideryActiveUser = createSelector(getApplications, getAuthUserTeam, getAuthUserId,
    (applications, team, id) => {
        if (team === "Service") return applications.data.filter((a) => a.id_accept === id)
        if (team === "Meneger") return applications.data.filter((a) => a.id_owner === id)
        return applications.data
    })

import React from "react";

export interface EditPhotoButtonProperties {
    setUpdatedUserPhotoUrl: React.Dispatch<React.SetStateAction<string | undefined>>
}
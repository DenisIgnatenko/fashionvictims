import { Box } from "@chakra-ui/react";
import React from 'react'
import { useAppSelector } from "../../hooks/useReduxHook";

export default function ProfilePage(): JSX.Element {
    const { user } = useAppSelector((state) => state.auth)
    return (
    <div>ProfilePage</div>
  )
}

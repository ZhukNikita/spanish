import React from "react";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import styles from "./FeedbackSkeleton.module.scss";

export const FeedbackSkeleton = () => {
    return (
        <div className={styles.skeleton}>
            <Stack spacing={1}>
                <div className={styles.body}>
                    <div>
                        <div className={styles.skeletonUser}>
                                <Skeleton variant="text" width={60} height={30} />
                                <Skeleton variant="text" width={100} height={30} />
                        </div>
                        <Skeleton variant="text" width="100%" height="190px" />
                    </div>
                </div>

            </Stack>
        </div>
    );
};

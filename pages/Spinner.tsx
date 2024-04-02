import React from 'react';
import { css } from '@emotion/react';
import { CSSProperties } from "react";
import { HashLoader } from 'react-spinners';
import Layout from './layout';

interface CustomSpinnerProps {
    loading: boolean;
}

const CustomSpinner: React.FC<CustomSpinnerProps> = ({ loading }) => {

    const override: CSSProperties = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 50px)",
        width: "calc(100vw - 50px)",
    };

    return (
        // <Layout>
        <div className="sweet-loading" >
            <HashLoader color={'#801022'} loading={loading} size={100} cssOverride={override} />
        </div>
        // </Layout>
    );
};

export default CustomSpinner;

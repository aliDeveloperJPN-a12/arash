declare module 'axios' {
    export interface AxiosRequestConfig {
        // Define your AxiosRequestConfig properties here check with backend
    }

    export interface AxiosResponse<T = any> {
        pageNumber: number;
        pageCount: number;
        rowCount: number;
        result: [];
        data: any;
    }

    export interface AxiosInstance {
        headers: any;
        interceptors: any;
        token: any;

        (config: AxiosRequestConfig): Promise<AxiosResponse>;

        get<T = any>(
            url: string,
            config?: AxiosRequestConfig,
        ): Promise<AxiosResponse<T>>;

        delete<T = any>(
            url: string,
            config?: AxiosRequestConfig,
        ): Promise<AxiosResponse<T>>;

        head<T = any>(
            url: string,
            config?: AxiosRequestConfig,
        ): Promise<AxiosResponse<T>>;

        post<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<AxiosResponse<T>>;

        put<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<AxiosResponse<T>>;

        patch<T = any>(
            url: string,
            data?: any,
            config?: AxiosRequestConfig,
        ): Promise<AxiosResponse<T>>;
    }

    export interface AxiosStatic extends AxiosInstance {
        create(config?: AxiosRequestConfig): AxiosInstance;
    }

    const axios: AxiosStatic;
    export default axios;
}

export const getDataFormatada = (): string => {
    const data = new Date();
    return data.toLocaleDateString('pt-BR', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
    }
    );
}
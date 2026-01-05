type Props = {
    title: string
    onClick?: () => void
}
export const Button = (props: Props) => {
    const {title} = props
    return <button>{title}</button>
}
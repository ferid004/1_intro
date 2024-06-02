import Pro_comp from '@/components/pro_comp'

const product = () => {
    const aha = [
        {
            id: 1,
            name: "Aha",
            price: 100
        },
        {
            id: 2,
            name: "ferid",
            price: 17
        },
        {
            id: 3,
            name: "murad",
            price: 56
        }

    ]

    return (
        <div>
            {aha && aha.map((item) => {
                return (
                    <div key={item.id}>
                        <Pro_comp data={item}></Pro_comp>
                    </div>
                )
            })}

        </div>
    )
}

export default product
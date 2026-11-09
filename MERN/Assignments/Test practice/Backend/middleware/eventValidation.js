
const validateEvent = (req, res, next) => {

    const {
        title,
        description,
        category,
        location,
        event_date,
        price,
        total_seats,
        available_seats
    } = req.body;

    if (
        !title?.trim() ||
        !description?.trim() ||
        !category?.trim() ||
        !location?.trim() ||
        !event_date ||
        isNaN(Date.parse(event_date)) ||
        isNaN(price) ||
        Number(price) < 0 ||
        isNaN(total_seats) ||
        Number(total_seats) <= 0 ||
        isNaN(available_seats) ||
        Number(available_seats) < 0 ||
        Number(available_seats) > Number(total_seats)
    ) {
        return res.status(400).json({
            success: false,
            message: 'Invalid event data'
        });
    }

    next();
};

export default validateEvent;
